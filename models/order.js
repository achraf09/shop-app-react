class Order {
    constructor(id, date, amount, items) {
        this.id= id;
        this.date = date;
        this.amount = amount;
        this.items = items;
    }


    get readableDate(){
        return this.date.toLocaleString('en-EN',{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

export default Order;
