/**
 * Created by nicorama on 24/06/2017.
 */
export interface User {
  id: number;
  name: string;
  admin?: boolean;
  email: string;
}


export interface Admin extends User {
  statement: string;
}

export interface Comment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
}



export interface Topic {
  id?: number;
  title: string;
  content: string;
  comments: Array<Comment>;
  user: User;
  tags?: Array<String>;
}
