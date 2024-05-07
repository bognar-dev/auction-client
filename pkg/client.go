package pkg

import (
	"bufio"
	"fmt"
	"net"
)

type Client struct {
	Id     int
	Conn   net.Conn
	Demand int
}

type Bid struct {
	amount int
	price  int
}



func RunClient() {
	conn, err := net.Dial("tcp", "localhost:8080")
	if err != nil {
		fmt.Println("Error connecting:", err.Error())
		return
	}
	defer func(conn net.Conn) {
		err := conn.Close()
		if err != nil {
			panic(err)
		}
	}(conn)

	reader := bufio.NewReader(conn)

	for {
		fmt.Print("Enter command (get_price, reserve {amount}, quit): ")
		var command string
		_, err := fmt.Scanln(&command)
		if err != nil {
			fmt.Println("Error reading input:", err.Error())
			continue
		}

		if _, err := conn.Write([]byte(command + "\n")); err != nil {
			fmt.Println("Error writing:", err.Error())
			continue
		}

		response, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("Error reading response:", err.Error())
			continue
		}

		fmt.Println("Server response:", response)
	}
}

func NewClient(clientID int, conn net.Conn, demand int) *Client {
	return &Client{
		Id:     clientID,
		Conn:   conn,
		Demand: demand,
	}
}

func ConnectClient(clientID int, serverAddr string, demand int) (*Client, error) {
	conn, err := net.Dial("tcp", serverAddr)
	if err != nil {
		fmt.Printf("Client %d: Error connecting: %s\n", clientID, err.Error())
		return &Client{}, nil
	}

	return NewClient(clientID, conn, demand), nil
}


func (client *Client) GetGoodsCount() (int, error) {
	
	return 20, nil
}


func (client *Client) GetAuctions() []string{
	return []string{"Rose", "Tulip", "Crop"}
}

func SendCommand(conn net.Conn, command string, clientID int) string {
	if _, err := conn.Write([]byte(command + "\n")); err != nil {
		fmt.Printf("Client %d: Error writing: %s\n", clientID, err.Error())
		return ""
	}

	reader := bufio.NewReader(conn)
	response, err := reader.ReadString('\n')
	if err != nil {
		fmt.Printf("Client %d: Error reading response: %s\n", clientID, err.Error())
		return ""
	}
	//fmt.Printf("Client %d: Server response: %s", clientID, response)
	response = response[:len(response)-1] // remove newline character
	return response
}
