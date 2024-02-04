import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnalyticalCard } from './AnalyticalCard';

export function DashboardTabs() {
  return (
    <Tabs defaultValue="account" className="w-[80%]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="revenue">Revenue</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
        <TabsTrigger value="sales">Sales</TabsTrigger>
      </TabsList>
      <TabsContent value="revenue">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col ">
            <div className="flex flex-row space-x-2">
              <AnalyticalCard
                cardTitle="Highest Sales"
                cardMeasure="240"
                cardicon=""
              />
              <AnalyticalCard
                cardTitle="Top Performer"
                cardMeasure="Silver Plan"
                cardicon=""
              />
            </div>
            <div className="flex flex-row space-x-2">
              <AnalyticalCard
                cardTitle="Average Value"
                cardMeasure="20 USD per month"
                cardicon=""
              />
              <AnalyticalCard cardTitle="MAU" cardMeasure="459" cardicon="" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="usage">
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex flex-col ">
            <div className="flex flex-row space-x-2">
              <AnalyticalCard
                cardTitle="EC2 Compute"
                cardMeasure="240"
                cardicon=""
              />
              <AnalyticalCard
                cardTitle="Amazon S3 "
                cardMeasure="200 GiB"
                cardicon=""
              />
            </div>
            <div className="flex flex-row space-x-2">
              <AnalyticalCard
                cardTitle="API Calles"
                cardMeasure="200"
                cardicon=""
              />
              <AnalyticalCard
                cardTitle="Services"
                cardMeasure="300"
                cardicon=""
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="sales">
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
