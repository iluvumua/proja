// src/ai/flows/extract-invoice-data.ts
'use server';

/**
 * @fileOverview Extracts invoice data from a document using OCR and AI.
 *
 * - extractInvoiceData - A function that extracts invoice data.
 * - ExtractInvoiceDataInput - The input type for the extractInvoiceData function.
 * - ExtractInvoiceDataOutput - The return type for the extractInvoiceData function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ExtractInvoiceDataInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A document (invoice, Devis/Bon de commande), as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractInvoiceDataInput = z.infer<typeof ExtractInvoiceDataInputSchema>;

const ExtractInvoiceDataOutputSchema = z.object({
  invoiceNumber: z.string().describe('The invoice number.'),
  invoiceDate: z.string().describe('The invoice date.'),
  amount: z.number().describe('The total amount of the invoice.'),
  vendorDetails: z.string().describe('Details about the vendor.'),
});
export type ExtractInvoiceDataOutput = z.infer<typeof ExtractInvoiceDataOutputSchema>;

export async function extractInvoiceData(input: ExtractInvoiceDataInput): Promise<ExtractInvoiceDataOutput> {
  return extractInvoiceDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractInvoiceDataPrompt',
  input: {
    schema: z.object({
      documentDataUri: z
        .string()
        .describe(
          "A document (invoice, Devis/Bon de commande), as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
        ),
    }),
  },
  output: {
    schema: z.object({
      invoiceNumber: z.string().describe('The invoice number.'),
      invoiceDate: z.string().describe('The invoice date.'),
      amount: z.number().describe('The total amount of the invoice.'),
      vendorDetails: z.string().describe('Details about the vendor.'),
    }),
  },
  prompt: `You are an expert in extracting data from invoices and other business documents.

  Analyze the following document and extract the key information, including invoice number, dates, amounts, and vendor details.
  Return the information in JSON format.

  Document: {{media url=documentDataUri}}`,
});

const extractInvoiceDataFlow = ai.defineFlow<
  typeof ExtractInvoiceDataInputSchema,
  typeof ExtractInvoiceDataOutputSchema
>({
  name: 'extractInvoiceDataFlow',
  inputSchema: ExtractInvoiceDataInputSchema,
  outputSchema: ExtractInvoiceDataOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
