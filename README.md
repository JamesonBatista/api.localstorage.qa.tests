<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>API Documentation</h1>
  <p class="pbase"><strong>Base URL:</strong> <h1>
   <a href="https://api-qas-trainings.glitch.me/" class="base" style="color: #e3b241">https://api-qas-trainings.glitch.me/</a></h1></p>
  <p class="abase">This API provides endpoints for managing various resources.</p>

  <h2>Menu</h2>
  <ul class="menu">
    <li ><a href="#user-endpoints">User Endpoints</a></li>
    <li ><a href="#user-endpointsForm">User Endpoints Form</a></li>
    <li ><a href="#project-endpoints">Project Endpoints</a></li>
    <li ><a href="#product-endpoints">Product Endpoints</a></li>
    <li ><a href="#approval-endpoints">Approval Endpoints</a></li>
    <li ><a href="#event-endpoints">Event Endpoints</a></li>
	<li ><a href="#challenger-endpoints">Challenger Endpoints</a></li>
  </ul>

  <hr>

  <!-- User Endpoints -->
  <h2 id="user-endpoints">User Endpoints</h2>

  <h3>1. Get All Users</h3>
  <ul>
    <li><strong>URL:</strong> <code>/users</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Returns a list of all registered users.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]</code></pre>

  <h3>2. Get User by ID</h3>
  <ul>
    <li><strong>URL:</strong> <code>/users/:id</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Returns the details of a specific user by ID.</li>
  </ul>
  <p><strong>Example Response:</strong> (if user is found)</p>
  <pre><code>{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}</code></pre>
  <p><strong>Response if user is not found:</strong></p>
  <pre><code>{
  "message": "User not found"
}</code></pre>

  <h3>3. Create User</h3>
  <ul>
    <li><strong>URL:</strong> <code>/users</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Creates a new user with the provided data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "John Doe",
  "email": "john.doe@example.com"
}</code></pre>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "id": 3,
  "name": "John Doe",
  "email": "john.doe@example.com"
}</code></pre>

  <h3>4. Update User</h3>
  <ul>
    <li><strong>URL:</strong> <code>/users/:id</code></li>
    <li><strong>Method:</strong> <code>PUT</code></li>
    <li><strong>Description:</strong> Updates an existing user with the provided data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "John Doe",
  "email": "john.doe@newemail.com"
}</code></pre>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@newemail.com"
}</code></pre>
  <p><strong>Response if user is not found:</strong></p>
  <pre><code>{
  "message": "User not found"
}</code></pre>

  <h3>5. Delete User</h3>
  <ul>
    <li><strong>URL:</strong> <code>/users/:id</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Deletes a user by ID.</li>
  </ul>
  <p><strong>Example Response:</strong> (if user is deleted successfully)</p>
  <pre><code>{
  "message": "User deleted successfully"
}</code></pre>
  <p><strong>Response if user is not found:</strong></p>
  <pre><code>{
  "message": "User not found"
}</code></pre>

<h2 id="user-endpointsForm">User Endpoints Form</h2>

<h3>1. Get All Users</h3>
<ul>
  <li><strong>URL:</strong> <code>/users</code></li>
  <li><strong>Method:</strong> <code>GET</code></li>
  <li><strong>Description:</strong> Returns a list of all registered users.</li>
</ul>
<p><strong>Example Response:</strong></p>
<pre><code>[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]</code></pre>

<h3>2. Get User by ID</h3>
<ul>
  <li><strong>URL:</strong> <code>/users/:id</code></li>
  <li><strong>Method:</strong> <code>GET</code></li>
  <li><strong>Description:</strong> Returns the details of a specific user by ID.</li>
</ul>
<p><strong>Example Response:</strong> (if user is found)</p>
<pre><code>{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}</code></pre>
<p><strong>Response if user is not found:</strong></p>
<pre><code>{
  "message": "User not found"
}</code></pre>

<h3>3. Create User (Form Submission)</h3>
<ul>
  <li><strong>URL:</strong> <code>/users</code></li>
  <li><strong>Method:</strong> <code>POST</code></li>
  <li><strong>Description:</strong> Creates a new user using data submitted via a form with flexible fields.</li>
</ul>
<p><strong>Request Body (Form Data):</strong></p>
<pre><code>
name=John Doe&email=john.doe@example.com&age=30
</code></pre>
<p><strong>Example Response:</strong></p>
<pre><code>{
  "id": 3,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}</code></pre>

<h3>4. Update User (Form Submission)</h3>
<ul>
  <li><strong>URL:</strong> <code>/users/:id</code></li>
  <li><strong>Method:</strong> <code>PUT</code></li>
  <li><strong>Description:</strong> Updates an existing user using data submitted via a form with flexible fields.</li>
</ul>
<p><strong>Request Body (Form Data):</strong></p>
<pre><code>
name=John Doe&email=john.doe@newemail.com
</code></pre>
<p><strong>Example Response:</strong></p>
<pre><code>{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@newemail.com"
}</code></pre>
<p><strong>Response if user is not found:</strong></p>
<pre><code>{
  "message": "User not found"
}</code></pre>

<h3>5. Delete User</h3>
<ul>
  <li><strong>URL:</strong> <code>/users/:id</code></li>
  <li><strong>Method:</strong> <code>DELETE</code></li>
  <li><strong>Description:</strong> Deletes a user by ID.</li>
</ul>
<p><strong>Example Response:</strong> (if user is deleted successfully)</p>
<pre><code>{
  "message": "User deleted successfully"
}</code></pre>
<p><strong>Response if user is not found:</strong></p>
<pre><code>{
  "message": "User not found"
}</code></pre>

  <!-- Project Endpoints -->
  <h2 id="project-endpoints">Project Endpoints</h2>

  <h3>1. Get All Projects</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Returns a list of all projects.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>[
  {
    "id": 1,
    "name": "Project Alpha",
    "description": "First project",
    "startDate": "2023-01-01",
    "endDate": "2023-12-31",
    "leader": "Alice",
    "members": []
  }
]</code></pre>

  <h3>2. Get Project by ID</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects/:id</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves details of a specific project by ID.</li>
  </ul>
  <p><strong>Response if project is not found:</strong></p>
  <pre><code>{
  "message": "Project not found"
}</code></pre>

  <h3>3. Create Project</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Creates a new project with the provided data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Project Beta",
  "description": "Second project",
  "endDate": "2024-06-30",
  "leader": "Bob"
}</code></pre>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "Project created successfully!",
  "project": {
    "id": 2,
    "name": "Project Beta",
    "description": "Second project",
    "startDate": "2024-01-01",
    "endDate": "2024-06-30",
    "leader": "Bob",
    "members": []
  }
}</code></pre>

  <h3>4. Update Project</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects/:id</code></li>
    <li><strong>Method:</strong> <code>PUT</code></li>
    <li><strong>Description:</strong> Updates an existing project with new data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Updated Project",
  "description": "Updated description",
  "endDate": "2024-12-31",
  "leader": "Carol"
}</code></pre>
  <p><strong>Response if project is not found:</strong></p>
  <pre><code>{
  "message": "Project not found"
}</code></pre>

  <h3>5. Delete Project</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects/:id</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Deletes a project by ID.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "Project deleted successfully!"
}</code></pre>
  <p><strong>Response if project is not found:</strong></p>
  <pre><code>{
  "message": "Project not found"
}</code></pre>

  <h3>6. Add Member to Project</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects/:projectId/members</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Adds a new member to a specific project.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "member_name": "John Doe",
  "office": "Developer"
}</code></pre>
  <p><strong>Response if member already exists:</strong></p>
  <pre><code>{
  "message": "Member John Doe already exists in the project"
}</code></pre>

  <h3>7. Remove Member from Project</h3>
  <ul>
    <li><strong>URL:</strong> <code>/projects/:projectId/members/:memberId</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Removes a member from a specific project.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "Member John Doe removed from project Project Alpha"
}</code></pre>
  <!-- Product Endpoints -->
  <h2 id="product-endpoints">Product Endpoints</h2>

  <h3>1. Get All Products</h3>
  <ul>
    <li><strong>URL:</strong> <code>/products</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Returns a list of all products.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>[
  {
    "id": 1,
    "name": "Product A",
    "brand": "Brand X",
    "price": 99.99
  },
  {
    "id": 2,
    "name": "Product B",
    "brand": "Brand Y",
    "price": 149.99
  }
]</code></pre>

  <h3>2. Get Product by ID</h3>
  <ul>
    <li><strong>URL:</strong> <code>/products/:id</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves details of a specific product by ID.</li>
  </ul>
  <p><strong>Response if product is not found:</strong></p>
  <pre><code>{
  "message": "Product not found"
}</code></pre>

  <h3>3. Create Product</h3>
  <ul>
    <li><strong>URL:</strong> <code>/products</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Creates a new product with the provided data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Product C",
  "brand": "Brand Z",
  "price": 199.99
}</code></pre>
  <p><strong>Response if required fields are missing or invalid:</strong></p>
  <pre><code>{
  "message": "Name, brand, and price are required."
}</code></pre>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "id": 3,
  "name": "Product C",
  "brand": "Brand Z",
  "price": 199.99
}</code></pre>

  <h3>4. Update Product</h3>
  <ul>
    <li><strong>URL:</strong> <code>/products/:id</code></li>
    <li><strong>Method:</strong> <code>PUT</code></li>
    <li><strong>Description:</strong> Updates an existing product with new data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Updated Product",
  "brand": "Updated Brand",
  "price": 299.99
}</code></pre>
  <p><strong>Response if product is not found:</strong></p>
  <pre><code>{
  "message": "Product not found"
}</code></pre>

  <h3>5. Delete Product</h3>
  <ul>
    <li><strong>URL:</strong> <code>/products/:id</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Deletes a product by ID.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "Product deleted successfully"
}</code></pre>
  <p><strong>Response if product is not found:</strong></p>
  <pre><code>{
  "message": "Product not found"
}</code></pre>

  <!-- Approval Endpoints -->
  <h2 id="approval-endpoints">Approval Endpoints</h2>

  <h3>1. Get User Approval Status</h3>
  <ul>
    <li><strong>URL:</strong> <code>/approval</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves the approval status of all users.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "cpf": "12345678901",
    "status": "PENDING"
  }
]</code></pre>

  <h3>2. Post New User Approval Request</h3>
  <ul>
    <li><strong>URL:</strong> <code>/approval</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Creates a new approval request for a user.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "cpf": "09876543210"
}</code></pre>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "cpf": "09876543210",
  "status": "PENDING"
}</code></pre>

  <h3>3. Approve User by Approval Code</h3>
  <ul>
    <li><strong>URL:</strong> <code>/approval/approve</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Approves a user using a unique approval code.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "code": "ABCD123"
}</code></pre>
  <p><strong>Response if code is invalid:</strong></p>
  <pre><code>{
  "message": "Invalid approval code"
}</code></pre>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "User approved successfully",
  "user": {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "cpf": "09876543210",
    "status": "APPROVED"
  }
}</code></pre>

  <h3>4. Update User Approval</h3>
  <ul>
    <li><strong>URL:</strong> <code>/approval/:id</code></li>
    <li><strong>Method:</strong> <code>PUT</code></li>
    <li><strong>Description:</strong> Updates a user’s approval information.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "John Doe",
  "email": "john.doe@newemail.com",
  "cpf": "12345678901"
}</code></pre>
  <p><strong>Response if user not found:</strong></p>
  <pre><code>{
  "message": "User not found"
}</code></pre>

  <h3>5. Delete User Approval by ID</h3>
  <ul>
    <li><strong>URL:</strong> <code>/approval/:id</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Deletes a user approval by ID.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "User deleted successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "cpf": "12345678901",
    "status": "PENDING"
  }
}</code></pre>

  <h3>6. Approve User by CPF</h3>
  <ul>
    <li><strong>URL:</strong> <code>/approval/approve-by-cpf</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Approves a user based on their CPF.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "cpf": "12345678901"
}</code></pre>
  <p><strong>Response if user not found:</strong></p>
  <pre><code>{
  "message": "User not found or approval code missing"
}</code></pre>

 <!-- Event Endpoints -->
  <h2 id="event-endpoints">Event Endpoints</h2>

  <h3>1. Get All Events</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Returns a list of all events.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>[
  {
    "id": 1,
    "name": "Annual Meetup",
    "date": "2024-06-15",
    "location": "New York",
    "capacity": 100,
    "participants": []
  }
]</code></pre>

  <h3>2. Get Event by ID</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events/:id</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves details of a specific event by ID.</li>
  </ul>
  <p><strong>Response if event is not found:</strong></p>
  <pre><code>{
  "message": "Event not found"
}</code></pre>

  <h3>3. Create Event</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Creates a new event with the provided data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Tech Conference",
  "date": "2024-09-21",
  "location": "San Francisco",
  "capacity": 200
}</code></pre>
  <p><strong>Response if event already exists:</strong></p>
  <pre><code>{
  "message": "Event with the name Tech Conference already exists"
}</code></pre>

  <h3>4. Update Event</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events/:id</code></li>
    <li><strong>Method:</strong> <code>PUT</code></li>
    <li><strong>Description:</strong> Updates an existing event with new data.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "Updated Event",
  "date": "2024-12-01",
  "location": "Los Angeles",
  "capacity": 150
}</code></pre>
  <p><strong>Response if event is not found:</strong></p>
  <pre><code>{
  "message": "Event not found"
}</code></pre>

  <h3>5. Delete Event</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events/:id</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Deletes an event by ID.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "Event deleted successfully"
}</code></pre>
  <p><strong>Response if event is not found:</strong></p>
  <pre><code>{
  "message": "Event not found"
}</code></pre>

  <h3>6. Add Participant to Event</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events/:eventId/participants</code></li>
    <li><strong>Method:</strong> <code>POST</code></li>
    <li><strong>Description:</strong> Adds a new participant to a specific event.</li>
  </ul>
  <p><strong>Request Body:</strong></p>
  <pre><code>{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}</code></pre>
  <p><strong>Response if participant already exists:</strong></p>
  <pre><code>{
  "message": "Participant 'John Doe' already exists in the event"
}</code></pre>

  <h3>7. Remove Participant from Event</h3>
  <ul>
    <li><strong>URL:</strong> <code>/events/:eventId/participants/:participantId</code></li>
    <li><strong>Method:</strong> <code>DELETE</code></li>
    <li><strong>Description:</strong> Removes a participant from a specific event.</li>
  </ul>
  <p><strong>Example Response:</strong></p>
  <pre><code>{
  "message": "Participant John Doe removed from event Tech Conference"
}</code></pre>

  <!-- Challenger Endpoints -->
  <h2 id="challenger-endpoints">Challenger Endpoints</h2>
  
  <p>These endpoints provide validation challenges from level 1 to level 10. Each level can be accessed to retrieve its specific data.</p>

  <h3>1. Level 1</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level1</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 1.</li>
  </ul>

  <h3>2. Level 2</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level2</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 2.</li>
  </ul>

  <h3>3. Level 3</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level3</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 3.</li>
  </ul>

  <h3>4. Level 4</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level4</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 4.</li>
  </ul>

  <h3>5. Level 5</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level5</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 5.</li>
  </ul>

  <h3>6. Level 6</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level6</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 6.</li>
  </ul>

  <h3>7. Level 7</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level7</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 7.</li>
  </ul>

  <h3>8. Level 8</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level8</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 8.</li>
  </ul>

  <h3>9. Level 9</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level9</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 9.</li>
  </ul>

  <h3>10. Level 10</h3>
  <ul>
    <li><strong>URL:</strong> <code>/validation/level10</code></li>
    <li><strong>Method:</strong> <code>GET</code></li>
    <li><strong>Description:</strong> Retrieves validation data for level 10.</li>
  </ul>

<hr>

<!-- Examples of Use with Frameworks -->
<h2 id="examples">Examples of Use with Frameworks</h2>

<!-- Cypress Example -->
<h3>Cypress Example</h3>
<pre><code class="language-javascript">
// Cypress: Get All Users
cy.request({
  method: 'GET',
  url: 'https://api-qas-trainings.glitch.me/users',
}).then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.length.greaterThan(0);
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Create User
cy.request({
  method: 'POST',
  url: 'https://api-qas-trainings.glitch.me/users',
  form: true,
  body: {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
}).then((response) => {
  expect(response.status).to.eq(201);
});
</code></pre>

<!-- Java with RestAssured Example -->
<h3>Java with RestAssured Example</h3>
<pre><code class="language-java">
// RestAssured: Get All Users
Response response = given()
  .when()
  .get("https://api-qas-trainings.glitch.me/users")
  .then()
  .statusCode(200)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Create User
Response response = given()
  .contentType("application/x-www-form-urlencoded")
  .formParam("name", "John Doe")
  .formParam("email", "john.doe@example.com")
  .when()
  .post("https://api-qas-trainings.glitch.me/users")
  .then()
  .statusCode(201)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<!-- Robot Framework Example -->
<h3>Robot Framework Example</h3>
<pre><code class="language-robot">
*** Settings ***
Library    RequestsLibrary

**_ Variables _**
${BASE_URL} https://api-qas-trainings.glitch.me

**_ Test Cases _**
Get All Users
[Documentation] Get a list of all users
${response}= GET ${BASE_URL}/users
Should Be Equal As Numbers ${response.status_code} 200

Create User
[Documentation] Create a new user
${data}=    Create Dictionary    name=John Doe    email=john.doe@example.com
    ${response}=    POST    ${BASE_URL}/users    data=${data}
Should Be Equal As Numbers ${response.status_code} 201
</code></pre>

<!-- Postman Example -->
<h3>Postman Example</h3>
<p>In Postman, you can use the following configurations for each request:</p>

<p><strong>Get All Users</strong></p>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/users</code></li>
</ul>

<p><strong>Create User</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/users</code></li>
  <li><strong>Body:</strong> x-www-form-urlencoded</li>
  <li><strong>Key-Value Pairs:</strong></li>
  <ul>
    <li>name: John Doe</li>
    <li>email: john.doe@example.com</li>
  </ul>
</ul>

<!-- projects -->
<hr>

<!-- Examples of Use for Project Endpoints -->
<h2 id="project-examples">Examples of Use for Project Endpoints</h2>

<!-- Cypress Example -->
<h3>Cypress Example</h3>
<pre><code class="language-javascript">
// Cypress: Get All Projects
cy.request({
  method: 'GET',
  url: 'https://api-qas-trainings.glitch.me/projects',
}).then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.length.greaterThan(0);
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Create Project with Validation
cy.request({
  method: 'POST',
  url: 'https://api-qas-trainings.glitch.me/projects',
  body: {
    name: 'Project Delta',
    leader: 'Alice',
    description: 'New project with validation',
    endDate: '2024-12-31'
  }
}).then((response) => {
  expect(response.status).to.eq(201);
  expect(response.body.project).to.have.property('name', 'Project Delta');
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Add Member to Project (no form required)
cy.request({
  method: 'POST',
  url: 'https://api-qas-trainings.glitch.me/projects/1/member',
  body: {
    member_name: 'John Doe',
    office: 'Developer'
  }
}).then((response) => {
  expect(response.status).to.eq(201);
  expect(response.body).to.have.property('message', 'Member added successfully');
});
</code></pre>

<!-- Java with RestAssured Example -->
<h3>Java with RestAssured Example</h3>
<pre><code class="language-java">
// RestAssured: Get All Projects
Response response = given()
  .when()
  .get("https://api-qas-trainings.glitch.me/projects")
  .then()
  .statusCode(200)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Create Project with Validation
Response response = given()
  .contentType("application/json")
  .body("{ \"name\": \"Project Delta\", \"leader\": \"Alice\", \"description\": \"New project with validation\", \"endDate\": \"2024-12-31\" }")
  .when()
  .post("https://api-qas-trainings.glitch.me/projects")
  .then()
  .statusCode(201)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Add Member to Project (no form required)
Response response = given()
  .contentType("application/json")
  .body("{ \"member_name\": \"John Doe\", \"office\": \"Developer\" }")
  .when()
  .post("https://api-qas-trainings.glitch.me/projects/1/member")
  .then()
  .statusCode(201)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<!-- Robot Framework Example -->
<h3>Robot Framework Example</h3>
<pre><code class="language-robot">
*** Settings ***
Library    RequestsLibrary

**_ Variables _**
${BASE_URL} https://api-qas-trainings.glitch.me

**_ Test Cases _**
Get All Projects
[Documentation] Get a list of all projects
${response}= GET ${BASE_URL}/projects
Should Be Equal As Numbers ${response.status_code} 200

Create Project with Validation
[Documentation] Create a new project with required fields
${data}=    Create Dictionary    name=Project Delta    leader=Alice    description=New project with validation    endDate=2024-12-31
    ${response}=    POST    ${BASE_URL}/projects    json=${data}
Should Be Equal As Numbers ${response.status_code} 201

Add Member to Project (no form required)
[Documentation] Add a new member to a specific project
${data}=    Create Dictionary    member_name=John Doe    office=Developer
    ${response}=    POST    ${BASE_URL}/projects/1/member    json=${data}
Should Be Equal As Numbers ${response.status_code} 201
</code></pre>

<!-- Postman Example -->
<h3>Postman Example</h3>
<p>In Postman, you can use the following configurations for each request:</p>

<p><strong>Get All Projects</strong></p>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/projects</code></li>
</ul>

<p><strong>Create Project with Validation</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/projects</code></li>
  <li><strong>Body:</strong> raw JSON</li>
  <li><strong>JSON Payload:</strong></li>
  <pre><code>{
    "name": "Project Delta",
    "leader": "Alice",
    "description": "New project with validation",
    "endDate": "2024-12-31"
  }</code></pre>
</ul>

<p><strong>Add Member to Project (no form required)</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/projects/1/member</code></li>
  <li><strong>Body:</strong> raw JSON</li>
  <li><strong>JSON Payload:</strong></li>
  <pre><code>{
    "member_name": "John Doe",
    "office": "Developer"
  }</code></pre>
</ul>
<!-- Poducts -->

<hr>

<!-- Examples of Use for Product Endpoints -->
<h2 id="product-examples">Examples of Use for Product Endpoints</h2>

<!-- Cypress Example -->
<h3>Cypress Example</h3>
<pre><code class="language-javascript">
// Cypress: Get All Products
cy.request({
  method: 'GET',
  url: 'https://api-qas-trainings.glitch.me/products',
}).then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.length.greaterThan(0);
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Create Product
cy.request({
  method: 'POST',
  url: 'https://api-qas-trainings.glitch.me/products',
  body: {
    name: 'Product X',
    brand: 'Brand Y',
    price: 150.99
  }
}).then((response) => {
  expect(response.status).to.eq(201);
  expect(response.body).to.have.property('name', 'Product X');
});
</code></pre>

<!-- Java with RestAssured Example -->
<h3>Java with RestAssured Example</h3>
<pre><code class="language-java">
// RestAssured: Get All Products
Response response = given()
  .when()
  .get("https://api-qas-trainings.glitch.me/products")
  .then()
  .statusCode(200)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Create Product
Response response = given()
  .contentType("application/json")
  .body("{ \"name\": \"Product X\", \"brand\": \"Brand Y\", \"price\": 150.99 }")
  .when()
  .post("https://api-qas-trainings.glitch.me/products")
  .then()
  .statusCode(201)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<!-- Robot Framework Example -->
<h3>Robot Framework Example</h3>
<pre><code class="language-robot">
*** Settings ***
Library    RequestsLibrary

**_ Variables _**
${BASE_URL} https://api-qas-trainings.glitch.me

**_ Test Cases _**
Get All Products
[Documentation] Get a list of all products
${response}= GET ${BASE_URL}/products
Should Be Equal As Numbers ${response.status_code} 200

Create Product
[Documentation] Create a new product
${data}=    Create Dictionary    name=Product X    brand=Brand Y    price=150.99
    ${response}=    POST    ${BASE_URL}/products    json=${data}
Should Be Equal As Numbers ${response.status_code} 201
</code></pre>

<!-- Postman Example -->
<h3>Postman Example</h3>
<p>In Postman, you can use the following configurations for each request:</p>

<p><strong>Get All Products</strong></p>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/products</code></li>
</ul>

<p><strong>Create Product</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/products</code></li>
  <li><strong>Body:</strong> raw JSON</li>
  <li><strong>JSON Payload:</strong></li>
  <pre><code>{
    "name": "Product X",
    "brand": "Brand Y",
    "price": 150.99
  }</code></pre>
</ul>
<!-- Events -->

<hr>

<!-- Examples of Use for Event Endpoints -->
<h2 id="event-examples">Examples of Use for Event Endpoints</h2>

<!-- Cypress Example -->
<h3>Cypress Example</h3>
<pre><code class="language-javascript">
// Cypress: Get All Events
cy.request({
  method: 'GET',
  url: 'https://api-qas-trainings.glitch.me/events',
}).then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.length.greaterThan(0);
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Create Event
cy.request({
  method: 'POST',
  url: 'https://api-qas-trainings.glitch.me/events',
  body: {
    name: 'Tech Conference',
    date: '2024-10-15',
    location: 'San Francisco',
    capacity: 200
  }
}).then((response) => {
  expect(response.status).to.eq(201);
  expect(response.body.event).to.have.property('name', 'Tech Conference');
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Add Participant to Event
cy.request({
  method: 'POST',
  url: 'https://api-qas-trainings.glitch.me/events/1/participants',
  body: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  }
}).then((response) => {
  expect(response.status).to.eq(201);
  expect(response.body).to.have.property('message', 'Participant John Doe added to event');
});
</code></pre>

<!-- Java with RestAssured Example -->
<h3>Java with RestAssured Example</h3>
<pre><code class="language-java">
// RestAssured: Get All Events
Response response = given()
  .when()
  .get("https://api-qas-trainings.glitch.me/events")
  .then()
  .statusCode(200)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Create Event
Response response = given()
  .contentType("application/json")
  .body("{ \"name\": \"Tech Conference\", \"date\": \"2024-10-15\", \"location\": \"San Francisco\", \"capacity\": 200 }")
  .when()
  .post("https://api-qas-trainings.glitch.me/events")
  .then()
  .statusCode(201)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Add Participant to Event
Response response = given()
  .contentType("application/json")
  .body("{ \"name\": \"John Doe\", \"email\": \"john.doe@example.com\", \"age\": 30 }")
  .when()
  .post("https://api-qas-trainings.glitch.me/events/1/participants")
  .then()
  .statusCode(201)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<!-- Robot Framework Example -->
<h3>Robot Framework Example</h3>
<pre><code class="language-robot">
*** Settings ***
Library    RequestsLibrary

**_ Variables _**
${BASE_URL} https://api-qas-trainings.glitch.me

**_ Test Cases _**
Get All Events
[Documentation] Get a list of all events
${response}= GET ${BASE_URL}/events
Should Be Equal As Numbers ${response.status_code} 200

Create Event
[Documentation] Create a new event
${data}=    Create Dictionary    name=Tech Conference    date=2024-10-15    location=San Francisco    capacity=200
    ${response}=    POST    ${BASE_URL}/events    json=${data}
Should Be Equal As Numbers ${response.status_code} 201

Add Participant to Event
[Documentation] Add a new participant to a specific event
${data}=    Create Dictionary    name=John Doe    email=john.doe@example.com    age=30
    ${response}=    POST    ${BASE_URL}/events/1/participants    json=${data}
Should Be Equal As Numbers ${response.status_code} 201
</code></pre>

<!-- Postman Example -->
<h3>Postman Example</h3>
<p>In Postman, you can use the following configurations for each request:</p>

<p><strong>Get All Events</strong></p>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/events</code></li>
</ul>

<p><strong>Create Event</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/events</code></li>
  <li><strong>Body:</strong> raw JSON</li>
  <li><strong>JSON Payload:</strong></li>
  <pre><code>{
    "name": "Tech Conference",
    "date": "2024-10-15",
    "location": "San Francisco",
    "capacity": 200
  }</code></pre>
</ul>

<p><strong>Add Participant to Event</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/events/1/participants</code></li>
  <li><strong>Body:</strong> raw JSON</li>
  <li><strong>JSON Payload:</strong></li>
  <pre><code>{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }</code></pre>
</ul>
<!-- Approval -->

<hr>

<!-- Approval Endpoints -->
<h2 id="approval-endpoints">Approval Endpoints</h2>

<h3>1. Get User Approval Status</h3>
<ul>
  <li><strong>URL:</strong> <code>/approval</code></li>
  <li><strong>Method:</strong> <code>GET</code></li>
  <li><strong>Description:</strong> Retrieves the approval status of all users.</li>
</ul>
<p><strong>Example Response:</strong></p>
<pre><code>[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "cpf": "12345678901",
    "status": "PENDING"
  }
]</code></pre>

<h3>2. Post New User Approval Request</h3>
<ul>
  <li><strong>URL:</strong> <code>/approval</code></li>
  <li><strong>Method:</strong> <code>POST</code></li>
  <li><strong>Description:</strong> Creates a new approval request for a user.</li>
</ul>
<p><strong>Request Body:</strong></p>
<pre><code>{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "cpf": "09876543210"
}</code></pre>
<p><strong>Example Response:</strong></p>
<pre><code>{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "cpf": "09876543210",
  "status": "PENDING"
}</code></pre>

<h3>3. Approve User by Approval Code</h3>
<ul>
  <li><strong>URL:</strong> <code>/approval/approve</code></li>
  <li><strong>Method:</strong> <code>POST</code></li>
  <li><strong>Description:</strong> Approves a user using a unique approval code.</li>
</ul>
<p><strong>Request Body:</strong></p>
<pre><code>{
  "code": "ABCD123"
}</code></pre>
<p><strong>Response if code is invalid:</strong></p>
<pre><code>{
  "message": "Invalid approval code"
}</code></pre>

<h3>4. Update User Approval</h3>
<ul>
  <li><strong>URL:</strong> <code>/approval/:id</code></li>
  <li><strong>Method:</strong> <code>PUT</code></li>
  <li><strong>Description:</strong> Updates a user’s approval information.</li>
</ul>
<p><strong>Request Body:</strong></p>
<pre><code>{
  "name": "John Doe",
  "email": "john.doe@newemail.com",
  "cpf": "12345678901"
}</code></pre>
<p><strong>Response if user not found:</strong></p>
<pre><code>{
  "message": "User not found"
}</code></pre>

<h3>5. Delete User Approval by ID</h3>
<ul>
  <li><strong>URL:</strong> <code>/approval/:id</code></li>
  <li><strong>Method:</strong> <code>DELETE</code></li>
  <li><strong>Description:</strong> Deletes a user approval by ID.</li>
</ul>
<p><strong>Example Response:</strong></p>
<pre><code>{
  "message": "User deleted successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "cpf": "12345678901",
    "status": "PENDING"
  }
}</code></pre>

<h3>6. Approve User by CPF</h3>
<ul>
  <li><strong>URL:</strong> <code>/approval/approve-by-cpf</code></li>
  <li><strong>Method:</strong> <code>POST</code></li>
  <li><strong>Description:</strong> Approves a user based on their CPF.</li>
</ul>
<p><strong>Request Body:</strong></p>
<pre><code>{
  "cpf": "12345678901"
}</code></pre>
<p><strong>Response if user not found:</strong></p>
<pre><code>{
  "message": "User not found or approval code missing"
}</code></pre>

<!-- Examples of Use for Approval Endpoints -->
<h2 id="approval-examples">Examples of Use for Approval Endpoints</h2>

<!-- Cypress Example -->
<h3>Cypress Example</h3>
<pre><code class="language-javascript">
// Cypress: Get User Approval Status
cy.request('GET', 'https://api-qas-trainings.glitch.me/approval').then((response) => {
  expect(response.status).to.eq(200);
});
</code></pre>

<pre><code class="language-javascript">
// Cypress: Approve User by Code
cy.request('POST', 'https://api-qas-trainings.glitch.me/approval/approve', {
  code: 'ABCD123'
}).then((response) => {
  expect(response.status).to.eq(200);
});
</code></pre>

<!-- Java with RestAssured Example -->
<h3>Java with RestAssured Example</h3>
<pre><code class="language-java">
// RestAssured: Get User Approval Status
Response response = given()
  .when()
  .get("https://api-qas-trainings.glitch.me/approval")
  .then()
  .statusCode(200)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<pre><code class="language-java">
// RestAssured: Approve User by Code
Response response = given()
  .contentType("application/json")
  .body("{ \"code\": \"ABCD123\" }")
  .when()
  .post("https://api-qas-trainings.glitch.me/approval/approve")
  .then()
  .statusCode(200)
  .extract().response();
System.out.println(response.asString());
</code></pre>

<!-- Robot Framework Example -->
<h3>Robot Framework Example</h3>
<pre><code class="language-robot">
*** Settings ***
Library    RequestsLibrary

**_ Variables _**
${BASE_URL} https://api-qas-trainings.glitch.me

**_ Test Cases _**
Get User Approval Status
${response}= GET ${BASE_URL}/approval
Should Be Equal As Numbers ${response.status_code} 200

Approve User by Code
${data}=    Create Dictionary    code=ABCD123
    ${response}=    POST    ${BASE_URL}/approval/approve    json=${data}
Should Be Equal As Numbers ${response.status_code} 200
</code></pre>

<!-- Postman Example -->
<h3>Postman Example</h3>
<p>In Postman, you can use the following configurations for each request:</p>

<p><strong>Get User Approval Status</strong></p>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/approval</code></li>
</ul>

<p><strong>Approve User by Code</strong></p>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>https://api-qas-trainings.glitch.me/approval/approve</code></li>
  <li><strong>Body:</strong> raw JSON</li>
  <li><strong>JSON Payload:</strong></li>
  <pre><code>{
    "code": "ABCD123"
  }</code></pre>
</ul>

</body>
</html>
