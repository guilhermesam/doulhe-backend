import IAuctioneerRepository from '../../../data/protocols/db/auctioneer-repository'
import { getRepository } from 'typeorm'

import { Auctioneer } from '../../../domain/entities'

export default class AuctioneerRepository implements IAuctioneerRepository {
  async findById (id: string): Promise<Auctioneer> {
    return getRepository(Auctioneer).findOne({ id: id })
  }
}
