<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientFeedbackRequest;
use App\Services\ClientFeedbackService;
use Illuminate\Http\Request;

class ClientFeedbackController extends Controller
{
    protected $clientFeedbackService;

    public function __construct(ClientFeedbackService $clientFeedbackService)
    {
        $this->clientFeedbackService = $clientFeedbackService;
    }

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ClientFeedbackRequest $request)
    {
        $this->clientFeedbackService->send($request->validated());
        
        return response()->json([]);
    }
}
