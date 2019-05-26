export default {
    /** Information of the running room.
     * Example: users, events log, cards left, ...
     * It is made to always reflect the state in
     * in firestore.
     * See mutations.js for how it is done. */
    room: {},

    /** Holds up to date information of the user on that client.
     * For example his role, damage, currentCard, ... */
    me: {},

    /** Holds informations of all rooms in firestore as they are
     * created.
     * Used in PrairieDogIndex.vue for listing of available rooms. */
    rooms: [],

    /** A mapping by index of the types of cards  and their available number.
     * Used for initialization only, and should not be changed at runtime.
     * Information on the cards during the game can be obtained by looking
     * in state.room above. See getters. */
    initialCardNumbers : [1, 2, 4, 4, 4, 4, 4, 4, 3, 2, 1, 1, 1, 1],
    cardsType : ['-10', '-5', '0', '1', '2', '3', '4', '5', '10', '15', '20', '×2', 'MAX → 0', '?']
}
