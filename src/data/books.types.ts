export type ReadingStatus = 'not started' | 'reading' | 'did not finish' | 'complete';

export interface BookSource {
	provider: string;
	url: string;
}

export interface Book {
	title: string;
	subtitle?: string;
	authors: string[];
	genres?: string[];
	description?: string;
	identifiers?: {
		isbn10?: string;
		isbn13?: string;
	};
	publication?: {
		publisher?: string;
		date?: string;
		format?: string;
		pages?: number;
		language?: string;
		series?: string;
		seriesNumber?: string;
	};
	status: ReadingStatus;
	cover?: {
		path: string;
		sourceUrl?: string;
		source?: string;
	};
	sources?: BookSource[];
	readDates?: {
		started?: string;
		finished?: string;
	};
	notes?: string;
	rating?: number;
	retrievedAt?: string;
}

export type BooksByYear = Record<string, Book[]>;
