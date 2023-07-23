<div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title text-center">Registro</h2>
                        <form id="registerForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <div class="mb-3">
                                <small>Já tem uma conta? <a href="<?php echo base_url('login'); ?>">Faça Login</a></small>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Registrar</button>
                        </form>
                        <div class="text-center mt-3">
                            <p>Ou registre-se com:</p>
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