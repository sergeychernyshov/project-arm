const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order: Number, // заявка
    account: Number, // счёт
    certificate: Number, // акт
    manager: { type: Schema.Types.ObjectId, ref: 'User' }, // менеджер
    manager_share: Number, // доля менеджера
    route: String, // маршрут
    cargo_characteristic: String, // характеристика груза
    work_code: String,// код работы
    delivery: Date, // подача
    unloading: Date, // разгрузка
    customer: String, // заказчик
    price: Number, // цена
    price_payment: String, // цена форма оплаты
    performer: String, // исполнитель
    price_performer: Number, // цена вн. исп.
    price_performer_payment: String, // цена вн. исп. форма оплаты
    car_type: String, // тип авто
    car_number: String, // гос. номер
    driver: String, // ф.и.о.
    trip_ticket: Boolean, // путевой лист
    waybill: Boolean, // транс. накл.
    delivery_bill: Boolean, // товар. накл.
    sent_carrier: Boolean, // передан перевозщику
    got_customer: Boolean, // получен от заказчика
    status: String, // статус
    note: String // примечание
},
{timestamps: true});

module.exports = mongoose.model('Order', orderSchema);