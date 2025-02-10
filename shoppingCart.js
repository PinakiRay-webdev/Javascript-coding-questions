//write a closure function where adding and removing of an item can be done. Function should return the current number of items remain in the cart after each operation;

function cart(){
    let item = 0;

    return {
        addItem : function(){
            item++;
            console.log(this.getItem());
        },

        removeItem : function(){
            item--;
            console.log(this.getItem());
        },

        getItem : function(){
            return item;
        }
    }
}

const cartOperation = cart();

cartOperation.addItem();
cartOperation.addItem();
cartOperation.addItem();

cartOperation.removeItem();
