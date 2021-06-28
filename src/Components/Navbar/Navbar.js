import React from 'react';

const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-black bg-blue pd-10">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active ms-5" aria-current="page" href="home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="#">About</a>
              </li>
              <li class="nav-item">
              <a class="nav-link ms-5" href="#">Blogs</a>
            </li>
            <li class="nav-item">
            <a class="nav-link ms-5" href="/login">login</a>
          </li>
            
            </ul>
          
          </div>
        </div>
        
      </nav> 
        </div>
    );
};

export default Navbar;