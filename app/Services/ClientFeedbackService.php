<?php

namespace App\Services;

use App\Models\ClientFeedback;
use Illuminate\Support\Facades\Mail;

class ClientFeedbackService
{
    public function send(array $data) : bool
    {
        $this->create($data);

        Mail::send('mail', ['data' => $data], function($message) {
            $message->to(env('CLIENT_FEEDBACK_MAIL_TO'), 'Client Feedback')
                ->subject('Client Feedback Form Received');
            $message->from(env('CLIENT_FEEDBACK_MAIL_TO'), env('MAIL_FROM_NAME'));
         });

        return true;
    }

    protected function create(array $data) : ClientFeedback
    {
        $clientFeedback = ClientFeedback::create($data);

        return $clientFeedback;
    }
}