'use server';

export async function getSimple(): Promise<string> {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL!); 

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data: string = await response.json();

		return data;
	} catch (err) {
		console.error(err);
		throw err;
	}
}