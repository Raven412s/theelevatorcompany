"use client";
import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CButton } from "@/components/animated/MovingBorders";

export default function QuotationDrawer() {
  const [open, setOpen] = useState(false);
  const [floorType, setFloorType] = useState("");
  const [otherFloor, setOtherFloor] = useState("");

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="bg-transparent hover:bg-golden-400/50">
            Get Your Quotation
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 flex flex-col items-center justify-center bg-black/20 min-h-screen">
          <DrawerHeader>
            <DrawerTitle className="text-center text-xl font-semibold">Construction Inquiry</DrawerTitle>
          </DrawerHeader>

          <div className="flex justify-center items-center w-full">
            <CButton
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                backgroundColor: "#131415",
                borderRadius: "calc(1.75rem * 0.96)"
              }}
              className="md:w-[38rem] md:h-[38rem] w-screen flex flex-col items-center  justify-center p-6"
            >
              <form className="w-full space-y-4 flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                  <div className="space-y-2 flex flex-col items-start md:w-full w-[88%] md:mr-6 !mr-10 ">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2 flex flex-col items-start md:w-full w-[88%] md:mr-6 !mr-10">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2 flex flex-col items-start md:w-full w-[88%] md:mr-6 !mr-10">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>
                  <div className="space-y-2 flex flex-col items-start md:w-full w-[88%] md:mr-6 !mr-10">
                    <Label htmlFor="floors">Number of Floors</Label>
                    <Select onValueChange={setFloorType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select floors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="G+1">G+1</SelectItem>
                        <SelectItem value="G+2">G+2</SelectItem>
                        <SelectItem value="G+3">G+3</SelectItem>
                        <SelectItem value="G+4">G+4</SelectItem>
                        <SelectItem value="G+5">G+5</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {floorType === "other" && (
                      <Input
                        id="other-floor"
                        placeholder="Specify other. Let us know the number of floors"
                        value={otherFloor}
                        onChange={(e) => setOtherFloor(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="space-y-2 flex flex-col items-start md:w-full w-[88%] md:mr-6 !mr-10 sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" rows={3} required />
                  </div>
                </div>

                <DrawerFooter className="!flex !flex-row gap-2 mt-4 justify-start md:w-full w-[88%]">
                  <Button type="submit" className="bg-golden-400/90 flex-1 hover:bg-golden-400">
                    Submit
                  </Button>
                  <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                </DrawerFooter>
              </form>
            </CButton>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
