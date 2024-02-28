//  // Linked list creation : created with oops, also create with functions

class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;  // reference of head copied to tail 
        this.size = 1; // initial size of List adding one node
    }

    appendNode(nodeData) {
        // // push the node from tail side
        let newNode = {
            value: nodeData,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;

        this.size++; // increasing the size with each added node
    }

    traversing() {
        let counter = 0;
        let currentNode = this.head;

        while (counter < this.size) {
            // console.log("Current Node: ", currentNode)
            currentNode = currentNode.next
            counter++;

        }
    }

    deleteNode(index) {
        // console.log("Head lead: ", this.head)

        let counter = 1;
        let lead = this.head; // in which we need to add the address of next node after delete, intially setting head as lead


        if (index === 1) {
            this.head = this.head.next;
        } else {
            while (counter < index - 1) { // lead node will be previous node of which we want to remove
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            console.log("lead: ", lead)
        }

        // this.size--;

    }

    insertNode(index, value) { // insert new node at specific position
        let counter = 1;
        let currentNode = this.head;

        while (counter > index) {
            counter++;
            currentNode = this.currentNode.next
        }

        let nextNode = currentNode.next;

        currentNode.next = {
            value: value,
            next: nextNode
        }
    }

    searchNode(data) {
        let result = undefined;

        let lead = this.head;  //lead node is the previous node which holds the address of our required node
        let loop = true;
        while (loop) {
            lead = lead.next;
            loop = !!lead;  // means null
            // if(lead.next === null){
            //     loop=false
            // }
            if (loop && lead.value === data) {
                loop = false;
                result = lead;
            }
        }

        console.log("Search Result: ", result)
    }

}

let list = new List(200);  //node 1
list.appendNode(300)  //node 2
list.appendNode(400)  //node 3
list.appendNode(500)  // deleted  //node 4
list.appendNode(600)  //node 5

list.traversing()

list.deleteNode(4);  // comment while creating insert node

// list.insertNode(2, 1000);  // commented while creating insert searchNode

list.searchNode(200)
// list.appendNode(800)

console.log(list)