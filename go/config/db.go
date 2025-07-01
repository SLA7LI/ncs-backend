package config

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB
func Connectdb() {
	
	dsn := "avnadmin:AVNS_lOhUN_3jpcZM4WZr86S@tcp(mysql-1846209d-wailmansour24-eeb4.c.aivencloud.com:26881)/defaultdb?parseTime=true&tls=skip-verify"
  	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil{
		panic("failed to connect database: " + err.Error())
	}
	//fmt.Println(db)
	DB = db
	//DB.AutoMigrate(&model.Transaction{}, &model.Escrow{})

	//runGormGen(DB)

}
