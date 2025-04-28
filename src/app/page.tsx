"use client";

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { extractInvoiceData } from "@/ai/flows/extract-invoice-data";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [documentDataUri, setDocumentDataUri] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setDocumentDataUri(base64String);
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
    reader.readAsDataURL(file);
  };

  const handleExtractData = async () => {
    if (!documentDataUri) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No document uploaded.",
      });
      return;
    }

    try {
      const data = await extractInvoiceData({ documentDataUri });
      toast({
        title: "Success",
        description: "Invoice data extracted successfully!",
      });
      console.log("Extracted data:", data);
    } catch (error: any) {
      console.error("Error extracting data:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to extract invoice data. ${error.message}`,
      });
    }
  };

  return (
    <SidebarProvider>
      <div className="md:pl-64">
        <Sidebar className="md:fixed md:inset-y-0 md:left-0 md:z-50 md:w-64">
          <SidebarHeader>
            <CardTitle className="text-lg font-semibold">InvoiceFlow</CardTitle>
            <p className="text-sm text-muted-foreground">
              Intelligent Invoice Management
            </p>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Invoices</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <Button variant="outline" className="w-full">
              Settings
            </Button>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <div className="p-4">
            <div className="mb-4 flex justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Invoice
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Invoice</DialogTitle>
                    <DialogDescription>
                      Upload your invoice document to extract data.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="file">Document</Label>
                      <Input
                        type="file"
                        id="file"
                        className="col-span-3"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <Button onClick={handleExtractData}>Extract Data</Button>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Welcome to InvoiceFlow</CardTitle>
              </CardHeader>
              <CardContent>
                Upload your invoice documents to extract data and manage your
                finances efficiently.
              </CardContent>
            </Card>
          </div>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}

