import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const reportsCollection = db.collection('reports');
			const result = await reportsCollection.insertOne({ ...body });
			return NextResponse.json(result);
		} catch (error) {
			NextResponse.json({ error: 'Failed to insert data' });
		}
	} else {
		NextResponse.json({ message: 'Method not allowed' });
	}
};

export const GET = async () => {
	try {
		const db = await DbConnect();
		const reportsCollection = db.collection('reports');
		const result = await reportsCollection.find().sort({ timeStamp: 1 }).toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
