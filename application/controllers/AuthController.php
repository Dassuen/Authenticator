<?php defined('BASEPATH') OR exit('No direct script access allowed');

class AuthController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->library('session');
    }

    public function index() {
        $this->load->view('auth/login');
    }

    public function login() {
        // Implemente a lógica de login com Firebase aqui
    }

    public function register() {
        // Implemente a lógica de registro com Firebase aqui
    }

    public function logout() {
        // Implemente a lógica de logout com Firebase aqui
    }
}