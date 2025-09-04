# Attraction CRUD API Documentation

## Overview

This document describes the Attraction CRUD API endpoints for the Travora application. All endpoints follow RESTful conventions and use JSON for request/response bodies.

## Base URL

```
/api/v1/attractions
```

## Authentication

- **GET** endpoints are public (no authentication required)
- **POST, PUT, DELETE** endpoints require admin authentication
- Include `Authorization: Bearer <token>` header for authenticated requests

## Data Model

### Attraction Object

```json
{
  "title": "string (required, 1-100 chars)",
  "location": "string (required, 1-200 chars)",
  "thumbnail": "string (required, valid URL)",
  "images": ["string (required, valid URLs, min 1, max 4)"],
  "category": "string (required)",
  "placeOffers": ["string (required, min 1)"],
  "details": "string (required, 10-5000 chars)"
}
```

### Example Attraction

```json
{
  "title": "oshan",
  "location": "srilanka",
  "thumbnail": "https://res.cloudinary.com/comseeker/image/upload/v1756973387/travora/attractions/eiio1pdtouxpsyosoryu.png",
  "images": [
    "https://res.cloudinary.com/comseeker/image/upload/v1756973404/travora/attractions/oznkj0nxmlidfxrl0zjx.png",
    "https://res.cloudinary.com/comseeker/image/upload/v1756973429/travora/attractions/uh3yh9igt0j7ks8bxhfa.png",
    "https://res.cloudinary.com/comseeker/image/upload/v1756973435/travora/attractions/zfnjxiauhuxv3g6ktifw.png",
    "https://res.cloudinary.com/comseeker/image/upload/v1756973477/travora/attractions/tqcasbhpwuwqshplz7uc.png"
  ],
  "category": "Mountain",
  "placeOffers": [
    "Train Spotting",
    "Hiking Trails",
    "Scenic Views",
    "Fishing Spots",
    "Rock Climbing"
  ],
  "details": "<b>swswswsw</b><div><b><br></b></div><div><b>huhgtuhguthg</b></div><div><b><br></b></div><div><b>huhgthguthg</b></div><div><b><br></b></div><div><b><br></b></div><div><b>huhgthguht</b></div>"
}
```

## API Endpoints

### 1. Get All Attractions (Paginated)

**GET** `/api/v1/attractions`

**Authentication:** None required

**Query Parameters:**

- `page` (optional): Page number (default: 1)
- `pageSize` (optional): Number of items per page (default: 10)

**Example Request:**

```bash
GET /api/v1/attractions?page=1&pageSize=10
```

**Success Response (200):**

```json
{
  "success": true,
  "data": {
    "attractions": [
      {
        "_id": "attraction_id",
        "title": "oshan",
        "location": "srilanka",
        "thumbnail": "https://res.cloudinary.com/...",
        "images": ["https://res.cloudinary.com/..."],
        "category": "Mountain",
        "placeOffers": ["Train Spotting", "Hiking Trails"],
        "details": "<b>swswswsw</b>...",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ],
    "page": 1,
    "pageSize": 10
  }
}
```

### 2. Get Single Attraction

**GET** `/api/v1/attractions/{id}`

**Authentication:** None required

**Path Parameters:**

- `id`: Attraction ID

**Example Request:**

```bash
GET /api/v1/attractions/64f1a2b3c4d5e6f7g8h9i0j1
```

**Success Response (200):**

```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "title": "oshan",
    "location": "srilanka",
    "thumbnail": "https://res.cloudinary.com/...",
    "images": ["https://res.cloudinary.com/..."],
    "category": "Mountain",
    "placeOffers": ["Train Spotting", "Hiking Trails"],
    "details": "<b>swswswsw</b>...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (404):**

```json
{
  "success": false,
  "error": "attraction_not_found"
}
```

### 3. Create Attraction

**POST** `/api/v1/attractions`

**Authentication:** Admin required

**Request Body:** Attraction object (see data model above)

**Example Request:**

```bash
POST /api/v1/attractions
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "title": "oshan",
  "location": "srilanka",
  "thumbnail": "https://res.cloudinary.com/comseeker/image/upload/v1756973387/travora/attractions/eiio1pdtouxpsyosoryu.png",
  "images": [
    "https://res.cloudinary.com/comseeker/image/upload/v1756973404/travora/attractions/oznkj0nxmlidfxrl0zjx.png"
  ],
  "category": "Mountain",
  "placeOffers": ["Train Spotting", "Hiking Trails"],
  "details": "<b>Beautiful mountain location</b>"
}
```

**Success Response (201):**

```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "title": "oshan",
    "location": "srilanka",
    "thumbnail": "https://res.cloudinary.com/...",
    "images": ["https://res.cloudinary.com/..."],
    "category": "Mountain",
    "placeOffers": ["Train Spotting", "Hiking Trails"],
    "details": "<b>Beautiful mountain location</b>",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**

- **401 Unauthorized:**

```json
{
  "success": false,
  "error": "unauthorized"
}
```

- **403 Forbidden:**

```json
{
  "success": false,
  "error": "forbidden"
}
```

- **422 Validation Error:**

```json
{
  "success": false,
  "error": "invalid_body",
  "details": {
    "fieldErrors": {
      "title": ["Title is required"],
      "images": ["At least one image is required"]
    }
  }
}
```

### 4. Update Attraction

**PUT** `/api/v1/attractions/{id}`

**Authentication:** Admin required

**Path Parameters:**

- `id`: Attraction ID

**Request Body:** Attraction object (see data model above)

**Example Request:**

```bash
PUT /api/v1/attractions/64f1a2b3c4d5e6f7g8h9i0j1
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "title": "Updated Oshan",
  "location": "srilanka",
  "thumbnail": "https://res.cloudinary.com/...",
  "images": ["https://res.cloudinary.com/..."],
  "category": "Mountain",
  "placeOffers": ["Train Spotting", "Hiking Trails", "Photography"],
  "details": "<b>Updated beautiful mountain location</b>"
}
```

**Success Response (200):**

```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "title": "Updated Oshan",
    "location": "srilanka",
    "thumbnail": "https://res.cloudinary.com/...",
    "images": ["https://res.cloudinary.com/..."],
    "category": "Mountain",
    "placeOffers": ["Train Spotting", "Hiking Trails", "Photography"],
    "details": "<b>Updated beautiful mountain location</b>",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

**Error Responses:**

- **404 Not Found:**

```json
{
  "success": false,
  "error": "attraction_not_found"
}
```

- **401/403:** Same as Create endpoint

### 5. Delete Attraction

**DELETE** `/api/v1/attractions/{id}`

**Authentication:** Admin required

**Path Parameters:**

- `id`: Attraction ID

**Example Request:**

```bash
DELETE /api/v1/attractions/64f1a2b3c4d5e6f7g8h9i0j1
Authorization: Bearer <admin_token>
```

**Success Response (200):**

```json
{
  "success": true,
  "data": {
    "message": "Attraction deleted successfully"
  }
}
```

**Error Responses:**

- **404 Not Found:**

```json
{
  "success": false,
  "error": "attraction_not_found"
}
```

- **401/403:** Same as Create endpoint

## Error Codes

| Code                   | Description                                |
| ---------------------- | ------------------------------------------ |
| `unauthorized`         | Missing or invalid authentication token    |
| `forbidden`            | User doesn't have admin privileges         |
| `attraction_not_found` | Attraction with specified ID doesn't exist |
| `invalid_body`         | Request body validation failed             |

## Validation Rules

### Title

- Required
- Minimum length: 1 character
- Maximum length: 100 characters

### Location

- Required
- Minimum length: 1 character
- Maximum length: 200 characters

### Thumbnail

- Required
- Must be a valid URL

### Images

- Required array
- Minimum 1 image
- Maximum 4 images
- Each image must be a valid URL

### Category

- Required
- Any string value accepted

### Place Offers

- Required array
- Minimum 1 place offer
- Any string values accepted

### Details

- Required
- Minimum length: 10 characters
- Maximum length: 5000 characters
- Supports HTML content

## Notes

1. All timestamps are in ISO 8601 format (UTC)
2. Pagination is 1-indexed (page 1 is the first page)
3. Images are stored as Cloudinary URLs in the example, but any valid URL format is accepted
4. The `details` field supports HTML content for rich text descriptions
5. All admin operations require a valid JWT token with admin role
