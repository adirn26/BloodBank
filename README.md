# BloodBank
BloodBank is a Node.js and Express API project that provides endpoints for managing donors, 
blood requests, and their registrations. This API is built with the intention of providing a 
simple and efficient way to manage blood donation requests and registrations.

## Getting Started
### Prerequisites
To run this project, you will need to have Node.js and NPM installed on your system. You can download and install them from the official website: https://nodejs.org/

### Installation
1. Clone the repository
```
git clone https://github.com/adirn26/BloodBank.git
```
2. Install the dependencies
```
cd BloodBank
npm install
```
3. Start the server
```
npm start
```
### Usage
#### Endpoints
GET /api/getAllDonors
This endpoint returns a list of all donors.

POST /api/register
This endpoint registers a new donor.

Request Body
```
{
    "name": "John Doe",
    "phone": "1223456789",
    "pincode": "560001", 
    "bloodGroup": "O+ve", 
}
```

POST /api/requestBlood
This endpoint posts a new blood request.

```
{
    "name": "John Doe",
    "phone": "1223456789",
    "pincode": "560001", 
    "bloodGroup": "O+ve", 
    "hospital": "KC general"
}
```
GET /api/getAllPatients
This endpoint returns a list of all blood requests.

