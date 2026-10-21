export interface ComicPage {
	slug: string;
	chapter: number;
	page: number;
	title: string;
	imageUrl: string;
	caption: string;
	publishedAt: string; // ISO 8601
	prevSlug: string | null;
	nextSlug: string | null;
}
