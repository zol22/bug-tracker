import React from "react";
import Table from "./Table";

function DashboardContainer({ columns, data }) {
  return (
    <div className="border-2 min-h-screen bg-gray-100 text-gray-900 w-full">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default DashboardContainer;
