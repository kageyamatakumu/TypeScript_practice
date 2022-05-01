import React, {FC} from 'react';
import { User2 } from './types/user';

type Props = {
    user: User2;
}

export const UserProfile: FC<Props> = (props) => {
    const { user } = props;
    return (
        <div>
            <dl>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>趣味</dt>
                <dd>{user.hobbies?.join(" / ")}</dd>
            </dl>
        </div>
    )
}
