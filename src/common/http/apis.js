import HttpClient from "./HttpClient";

export const caseStudyApi = new HttpClient({ url: process.env.NEXT_PUBLIC_API_URL }) 