
<div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title text-center">Login</h2>
                        <form id="loginForm">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <div class="mb-3">
                                <small>Não tem uma conta? <a href="<?php echo base_url('register'); ?>">Crie uma aqui</a></small>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>
                        <div class="text-center mt-3">
                            <p>Ou entre com:</p>
                            <button type="button" class="btn btn-secondary btn-github">
                                <i class="fab fa-github"></i> GitHub
                            </button>
                            <button type="button" class="btn btn-danger btn-google">
                                <i class="fab fa-google"></i> Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>