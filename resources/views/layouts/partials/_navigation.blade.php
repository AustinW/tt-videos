<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            
            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
        </div>
        
        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                @if (!Auth::guest())
                    <li><a href="{{ route('videos.index') }}">My Videos</a></li>
                    <li><a href="{{ route('competitions.index') }}">My Scores</a></li>
                    @permission('watch-athlete')
                        <li><a href="{{ route('athletes.index') }}">My Athletes</a></li>
                    @endpermission
                @endif
            </ul>
            
            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                @if (Auth::guest())
                    <li><a href="{{ route('login') }}">Login</a></li>
                    <li><a href="{{ route('register') }}">Register</a></li>
                @else
                    <li><a href="{{ Auth::user()->linkToAdmin() }}">{{ Auth::user()->rolesString() }}</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>
                        
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="{{ route('competitions.create') }}"><i class="glyphicon glyphicon-edit"></i> Submit Scores</a></li>
                            <li><a href="{{ route('upload.create') }}"><i class="glyphicon glyphicon-facetime-video"></i> Upload a Video</a></li>
                            @permission('view-athletes')
                            <li><a href="{{ route('athletes.search') }}"><i class="glyphicon glyphicon-search"></i> Search Athletes</a></li>
                            @endpermission
                            <li><a href="{{ route('user.index') }}"><i class="glyphicon glyphicon-user"></i> Profile</a></li>
                            @role('owner', 'admin')
                            <li><a href="{{ url('/admin') }}"><i class="glyphicon glyphicon-lock"></i> Admin</a></li>
                            @endrole
                            <li>
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                    <i class="glyphicon glyphicon-off"></i> Logout
                                </a>
                                
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>