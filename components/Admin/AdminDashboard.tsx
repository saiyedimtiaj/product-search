"use client";
import { useGetAdminDashboardData } from "@/hooks/dashboard.hooks";
import { Card } from "../ui/card";
import translate from "@/utils/translate";

const AdminDashboard = () => {
  const { data, isLoading } = useGetAdminDashboardData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">
            {translate.admin.statisticPage.totalProduct}
          </div>
        </div>
        <div className="mt-4 text-2xl md:text-3xl font-semibold">
          {data?.data?.productCount}
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">
            {" "}
            {translate.admin.statisticPage.totalCategory}
          </div>
        </div>
        <div className="mt-4 text-2xl md:text-3xl font-semibold">
          {data?.data?.categoryCount}
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">
            {" "}
            {translate.admin.statisticPage.totalSaller}
          </div>
        </div>
        <div className="mt-4 text-2xl md:text-3xl font-semibold">
          {data?.data?.sallerCount}
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
