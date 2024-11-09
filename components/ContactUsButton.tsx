import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createQuery } from "@/actions/index.action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const ContactUsButton = ({ variant = "primary", openDialog = false }) => {
  const [formDataTemp, setFormData] = useState({
    studentName: "",
    studentPhone: "",
    studentEmail: "",
    studentCity: "",
    studentTarget: "",
    studentQuery: "",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();
  const intervalRef: React.MutableRefObject<boolean> = useRef(false);
  useEffect(() => {
    if (openDialog && !intervalRef.current) {
      setTimeout(() => {
        setIsFormOpen(true);
        intervalRef.current = true;
      }, 3000);
    }
  }, []);
  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await createQuery({
      name: formDataTemp.studentName,
      phone: formDataTemp.studentPhone,
      query: formDataTemp.studentQuery,
      email: formDataTemp.studentEmail,
      target: formDataTemp.studentTarget,
    });
    setFormData({
      studentName: "",
      studentEmail: "",
      studentPhone: "",
      studentCity: "",
      studentTarget: "",
      studentQuery: "",
    });
    setIsFormOpen(false);
    router.push(
      `/formThankYou?name=${formDataTemp.studentName}&phone=${formDataTemp.studentPhone}&class=${formDataTemp.studentTarget}&email=${formDataTemp.studentEmail}`,
    );
  };
  return (
    <Dialog open={isFormOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => {
            setIsFormOpen(true);
          }}
          className={` text-xs sm:text-lg font-bold w-fit contact-us-button ${variant}-button-animation flex flex-row bg-${variant} rounded-xl py-2.5 px-5 transition-all duration-300`}
        >
          {"Contact Us"}
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md rounded-3xl p-4 sm:p-8 bg-primary scale-75 sm:scale-100"
        style={{ borderRadius: 20 }}
      >
        <DialogHeader>
          <DialogTitle>{`Let's Make You Champ! 🏆`}</DialogTitle>
          <DialogDescription>
            {`Ask any doubt, hindering you from being a 'Champ'`}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col items-center space-x-2 gap-y-5">
            <Label htmlFor="" className="sr-only">
              Name of student
            </Label>
            <Input
              required={true}
              id="queryName"
              name={"query-name"}
              placeholder={"Full Name"}
              className={
                "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
              }
              value={formDataTemp.studentName}
              onChange={(e) => {
                setFormData({
                  ...formDataTemp,
                  studentName: e.currentTarget.value,
                });
              }}
            />
            <Label htmlFor="" className="sr-only">
              Phone of student
            </Label>
            <Input
              required={true}
              name={"query-phone"}
              className={
                "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
              }
              placeholder={"Mobile"}
              value={formDataTemp.studentPhone}
              onChange={(e) => {
                setFormData({
                  ...formDataTemp,
                  studentPhone: e.currentTarget.value,
                });
              }}
            />
            <Label htmlFor="" className="sr-only">
              Email of student
            </Label>
            <Input
              required={true}
              id="queryEmail"
              name={"query-email"}
              className={
                "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
              }
              placeholder={"Email"}
              value={formDataTemp.studentEmail}
              onChange={(e) => {
                setFormData({
                  ...formDataTemp,
                  studentEmail: e.currentTarget.value,
                });
              }}
            />
            <Label htmlFor="" className="sr-only">
              City of student
            </Label>
            <Input
              required={true}
              id="queryCity"
              name={"query-city"}
              className={
                "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
              }
              placeholder={"City"}
              value={formDataTemp.studentCity}
              onChange={(e) => {
                setFormData({
                  ...formDataTemp,
                  studentCity: e.currentTarget.value,
                });
              }}
            />
            <Label htmlFor="" className="sr-only">
              Target course of student
            </Label>
            <Select
              required={true}
              onValueChange={(e) => {
                setFormData({
                  ...formDataTemp,
                  studentTarget: e,
                });
              }}
              name={"query-target"}
              defaultValue={formDataTemp.studentTarget}
            >
              <SelectTrigger
                className={"bg-foreground text-background rounded-xl"}
              >
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent
                className={"bg-foreground text-background rounded-xl"}
              >
                <SelectItem value="class11">Class 11</SelectItem>
                <SelectItem value="class12">Class 12</SelectItem>
                <SelectItem value="dropper">Dropper</SelectItem>
              </SelectContent>
            </Select>
            <Label htmlFor="" className="sr-only">
              Query of student
            </Label>
            <Textarea
              required={true}
              id="queryDesc"
              name={"query-desc"}
              placeholder={"Your Query"}
              className={
                "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
              }
              cols={5}
              value={formDataTemp.studentQuery}
              onChange={(e) => {
                setFormData({
                  ...formDataTemp,
                  studentQuery: e.currentTarget.value,
                });
              }}
            />
            <div
              className={
                "w-full flex flex-row gap-3 items-center justify-center relative"
              }
            >
              <Button
                type="submit"
                size="sm"
                className="text-lg px-4 py-2 rounded-2xl bg-secondary hover:bg-secondary hover:scale-110 secondary-button-animation transition-all duration-300"
              >
                {`Make Me Champ`}
              </Button>
            </div>
          </div>
        </form>
        <button
          id={"dialogClose"}
          onClick={() => {
            setIsFormOpen(false);
            intervalRef.current = false;
          }}
          className={`absolute right-0 w-fit contact-us-button flex flex-row bg-transparent p-5`}
        >
          <X />
        </button>
      </DialogContent>
    </Dialog>
  );
};
export default ContactUsButton;
