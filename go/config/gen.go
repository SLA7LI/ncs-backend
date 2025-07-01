package config

import (
	"fmt"

	"gorm.io/gen"

	"gorm.io/gorm"
)

func runGormGen(db *gorm.DB) {
	g := gen.NewGenerator(gen.Config{
		OutPath: "./model",            // folder to output .go files
		Mode:    gen.WithDefaultQuery, // generate basic query methods
	})
	g.UseDB(db)
	g.GenerateAllTable()
	g.Execute()
	fmt.Println("✅ GORM model generation complete")
}