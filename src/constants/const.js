import 'dotenv/config';  
export const activityStatus = {
  DELETED: 'deleted',
  OPEN: 'open',
  COMPLETED: 'completed',
  ARCHIVED: 'archived'
}

export const userStatus = {
  ACTIVE: 'active',
  PENDING: 'pending',
  DELETED: 'deleted',
  ARCHIVED: 'archived'
}

export const privateKey = process.env.PRIVATE_KEY

export const publicKey = process.env.PUBLIC_KEY

const serverName = "https://alessio-be.longwavestudio.dev"

export const actions = {
  ADD_ACTIVITY: 'addActivity',
  GET_ACTIVITY: 'getActivity',
  LIST_ACTIVITIES: 'listActivities'
}