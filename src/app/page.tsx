"use client";

import React from "react";
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

export default function Home() {
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
              <SidebarTrigger asChild>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Invoice
                </Button>
              </SidebarTrigger>
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
