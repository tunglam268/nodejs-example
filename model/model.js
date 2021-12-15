var db = require('../dbconnection');

var Model = {
    getAllModel : function(callback) {
        return db.query("Select * from sinhvien" , callback);
    },
    getModelById : function(id,callback) {
        return db.query("SELECT * FROM sinhvien WHERE id = ?",[id],callback)
    },
    addModel : function(model,callback) {
        return db.query("Insert into sinhvien(name,class,dob) values(?,?,?)",[model.name,model.class,model.dob],callback);
    },
    deleteModel : function(id ,callback) {
        return db.query("DELETE FROM sinhvien WHERE id = ?" ,[id],callback)
    },
    updateModel : function(id,model,callback) {
        return db.query("UPDATE sinhvien SET name = ?,class = ?,dob = ? WHERE id = ?",[model.name,model.class,model.dob],[id],callback)
    }
};

module.exports = Model;