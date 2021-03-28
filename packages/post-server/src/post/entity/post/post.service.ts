import { Injectable } from '@nestjs/common';
import { POST_DATA } from '../../../constant/mock-DB';

@Injectable()
export class PostService {
  getOne(id: number) {
    return POST_DATA.find((post) => post.id == id);
  }

  getList(offset: number, limit: number, search: string) {
    const post = POST_DATA.filter((post) => {
      if (!search) {
        return post;
      }
      if (Object.values(post).join('').match(new RegExp(search, 'g'))) {
        return post;
      }
    });
    console.log(post);
    const length = post.length;

    return {
      docs: post.slice(offset, limit),
      offset,
      length,
    };
  }
}
