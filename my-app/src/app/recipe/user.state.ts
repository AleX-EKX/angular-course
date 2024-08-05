import { State, Action, StateContext, Selector } from '@ngxs/store';


// export interface UserStateModel {
//   id: string;
//   role: string;
//   firstName: string;
//   lastName: string;
//   middleName: string;
//   avatar: string;
//   username: string;
//   jwtToken: string;
// }

// const defaultUserState: UserStateModel = {
//   id: '',
//   role: '',
//   firstName: '',
//   lastName: '',
//   middleName: '',
//   avatar: '',
//   username: '',
//   jwtToken: ''
// };

// export class SetUser {
//   static readonly type = '[User] SetUser';
//   constructor(public payload: UserStateModel) {}
// }

// export class ClearUser {
//   static readonly type = '[User] ClearUser';
// }

// @State<UserStateModel>({
//   name: 'user',
//   defaults: defaultUserState
// })
// export class UserState {

//   @Selector()
//   static user(state: UserStateModel): UserStateModel | null {
//     return state && state.id ? state : null;
//   }

//   @Selector()
//   static isAdmin(state: UserStateModel): boolean {
//     return state.role === 'admin';
//   }

//   @Action(SetUser)
//   setUser(ctx: StateContext<UserStateModel>, action: SetUser) {
//     ctx.setState(action.payload);
//   }

//   @Action(ClearUser)
//   clearUser(ctx: StateContext<UserStateModel>) {
//     ctx.setState(defaultUserState);
//     localStorage.removeItem('authToken');
//     sessionStorage.removeItem('authToken');
//   }
// }
