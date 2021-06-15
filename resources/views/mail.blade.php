<h1>Hi, Admin</h1>
<p>Client feedback form received</p>
<h2>Client Feedback</h2>
<p>Name: {{ $data['name'] }}</p>
<p>Email: {{ $data['email'] }}</p>
@if($data['website'])
<p>Website: {{ $data['website'] }}</p>
@endif
<p>Message: {{ $data['message'] }}</p>