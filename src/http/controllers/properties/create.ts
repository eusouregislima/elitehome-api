import {
	type CreatePorpertyUseCaseRequest,
	CreatePropertyUseCase,
} from '@/use-cases/create-property';
import type { FastifyReply, FastifyRequest } from 'fastify';

export async function create(request: FastifyRequest, reply: FastifyReply) {
	const useCase = new CreatePropertyUseCase();

	const response = useCase.execute(
		request.body as CreatePorpertyUseCaseRequest,
	);

	return reply.status(201).send(response);
}
