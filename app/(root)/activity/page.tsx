import { Card } from "@/components/index";
import { getActivities } from "@/lib/actions/thread.action";

export const metadata = {
  title: "Activity",
};

export default async function Activity() {
  const acitivities = await getActivities();

  return (
    <section className="flex h-full min-h-screen w-full flex-col gap-5 overflow-y-auto px-5 pb-44 pt-5">
      <h1 className="title pb-10">Activity</h1>
      {acitivities?.map((activity) => <Card {...activity} key={activity.id} />)}
    </section>
  );
}
