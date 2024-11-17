import Portfolio from "@/app/components/Portfolio";
import { portfolioData } from "@/app/data/data";

export async function GET() {
    return Response.json(portfolioData);
  }