import { Property } from '@/entities/property';

type CreatePorpertyUseCaseRequest = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: string;
};

type CreatePropertyUseCaseResponse = {
	property: Property;
};

export class CreatePropertyUseCase {
	execute({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: CreatePorpertyUseCaseRequest): CreatePropertyUseCaseResponse {
		const property = new Property({
			name,
			totalValue,
			numberOfRooms,
			city,
			state,
			size,
		});

		return { property };
	}
}
