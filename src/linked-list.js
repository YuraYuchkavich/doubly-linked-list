const Node = require('./node');

class LinkedList {

    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	let node = new Node(data);

    	if (this.length) {
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	}
    	else {
    		this._head = node;
    		this._tail = node;
    	}
    	this.length++;

    	return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {

    	var sNode = this._head,
     	count = 0;
    	
    	while (count < index) {
        sNode = sNode.next;
        count++;
    	}

    	return sNode.data;
    }

    insertAt(index, data) {

    	var sNode = this._head,
    	insNode = new Node(data),
    	count = 0;

    	if (!sNode) {
    		this.append(data);
    	}
    	else {
    		while (count < index) {
    			sNode = sNode.next;
    			count++;
    		}

    		insNode.prev = sNode.prev;
    		insNode.next = sNode;
    		sNode.prev.next = insNode;
    		sNode.prev = insNode;
    		
            this.length++;
    	}

    	return this;
    }

    isEmpty() {

    	return ( this.length === 0 ) ? true : false; 

    }

    clear() {

    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    	return this;

    }

    deleteAt(index) {
        var sNode = this._head,
            count = 0;

        if (index != 0) {
            while (count < index) {
                sNode = sNode.next;
                count++;
            } 

            sNode.prev.next = sNode.next;
            sNode.next.prev = sNode.prev;
        } 
        else {
            if ( this.length == 1 ) {
                this.clear();
            } 
            else {
                if (index == 0) {
                    this._head = this._head.next;
                    this._head.prev = null;
                }
                if (index == this.length - 1) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                }
            }
        }
        return this;
    }

    reverse() {
        while (true) {
            this._head.prev = [this._head.next, this._head.next = this._head.prev][0];

            if (!this._head.prev) break;
            else this._head = this._head.prev;
        }
        
        var sNode = this._head,
            count = 1;

        while (count < this.length) {
            sNode = sNode.next;
            count++;
        }

        this._tail = sNode;

        return this;
}

    indexOf(data) {

    	var sNode = this._head,
		index = 0;

        while (sNode.data != data) {
            if (!sNode.next) return -1;
            else {
                sNode = sNode.next;
                index++;
            }
        }

	return index;

    }
}

module.exports = LinkedList;
