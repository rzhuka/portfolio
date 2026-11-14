import { HomeTemplate } from "@/components/templates";
import { profile } from "@/data/profile";

export default function HomePage() {
  return <HomeTemplate profile={profile} />;
}
