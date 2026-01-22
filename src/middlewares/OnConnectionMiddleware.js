import AddActivityAction from "../components/actions/AddActivityAction.js";
import GetActivityAction from "../components/actions/GetActivityAction.js";
import ListActivitiesAction from "../components/actions/ListActivitiesAction.js";



class OnConnectionMiddleware {
    async onConnection(socket, io, next){
        console.log('connected');
        new AddActivityAction(socket, socket.data.loggedUser).process();
        new GetActivityAction(socket, socket.data.loggedUser).process();
        new ListActivitiesAction(socket, socket.data.loggedUser).process();
        socket.emit('connected', socket.data.loggedUser);
        next();
    }
}

export default new OnConnectionMiddleware();