1. Set up the database ✅
2. Emails:
   a) set up emails table ✅
   b) module/request
   c) router
   d) onSubmit
3. Templates:
   a) set up emails table
   b) module/request
   c) router
   d) onSubmit

4. Trigger functionality (when the user updates stock)
   a) Get request to the emails table
   b) Get request to the templates table
   c) Post request to the API (contaning data from the previous 2 get requests)
   d) Validation:
   -if the 2 get requests !== null, send the POST
   -if number of apples was 0 and changed to not 0, send the POST.
