export interface ICardItem {
	id: number;
	img: string;
	maxTemp: number;
	minTemp: number;
	city: string;
	humidity: number;
	isUpdating: boolean;
	isUpdate: boolean;
}
