import Data from '@/store/data.json'
export default {
    namespaced: true,
    state: {
        wonTickets: Data.wonTickets,
    },
}
