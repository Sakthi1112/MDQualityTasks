import React from "react";
import Card from "./Card";
export default function CardGroup() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className="w-full flex py-4 justify-center ">
        <Card heading="Student" description="Number of Students" number="68" />
        <Card
          heading="Instructor"
          description="Number of Instructor"
          number="57"
        />
        <Card heading="Subjects" description="Number of Subjects" number="33" />
        <Card heading="Enrolled" description="Number of Enrolled" number="33" />
      </div>
      <div className="w-full flex py-4 justify-center ">
        <Card
          heading="Enrolled Amount"
          description="Total Enrolled Amount"
          number="$410.00"
        />
        <Card heading="Revenue" description="Total Revenue" number="$94.00" />
        <Card
          heading="Enroll Today"
          description="Total Enrolled Today"
          number="$0.00"
        />
        <Card
          heading="This Month"
          description="Total Enrolled This Month"
          number="$0.00"
        />
      </div>
      <div className=" flex py-4 justify-center">
        <Card heading="Monthly Income Stats for 2022" />
        <Card heading="Payment Statistics for October" />
      </div>
    </div>
  );
}
