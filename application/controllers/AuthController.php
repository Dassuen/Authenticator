<?php defined('BASEPATH') OR exit('No direct script access allowed');

class AuthController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->library('session');
    }
    public function index() {
        redirect("login");
    }
    public function login() {
        $this->load->view('templates/header');
        $this->load->view('auth/login');
        $this->load->view('templates/footer');

    }

    public function register() {
        $this->load->view('templates/header');
        $this->load->view('auth/register');
        $this->load->view('templates/footer');
    }

    public function logout() {
        // Implemente a lógica de logout com Firebase aqui
        $this->load->view('templates/header');
        $this->load->view('auth/logout');
        $this->load->view('templates/footer');
    }
}