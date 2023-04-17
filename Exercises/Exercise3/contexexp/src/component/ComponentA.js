import ComponentB from './ComponentB';
import { UserProvider } from './UserContext';

const ComponentA = () => {
    function simple() {
        return <div>Hey, There</div>
    }
    return (
        <>
            <UserProvider value={simple}>
                <ComponentB />
            </UserProvider>
        </>

    )
}

export default ComponentA
