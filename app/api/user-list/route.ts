import { NextResponse } from "next/server";

import { USER_LIST } from "@/constants/data";

const GET = async () => {
	return NextResponse.json(USER_LIST, { status: 200 });
};

export { GET };
