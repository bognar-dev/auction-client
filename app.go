package main

import (
	"context"
	"fmt"
	"auction-client/pkg"
)

// App struct
type App struct {
	ctx context.Context
	client *pkg.Client
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	var err error
	a.ctx = ctx
	a.client, err = pkg.ConnectClient(1, "localhost:8080", 200)
	if err != nil {
		fmt.Println("Error connecting:", err.Error())
		return
	}
}

// domReady is called after front-end resources have been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// beforeClose is called when the application is about to quit,
// either by clicking the window close button or calling runtime.Quit.
// Returning true will cause the application to continue, false will continue shutdown as normal.
func (a *App) beforeClose(ctx context.Context) (prevent bool) {
	return false
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// connect to the server tcp
func (a *App) GetAuctions() []string {
	return a.client.GetAuctions()
}


